import dbConnect from "@/lib/dbConnect";
import MessageModel from "@/models/message.model";


export async function POST(request: Request) {
    await dbConnect()

    try {
        const {name, email, subject, content} = await request.json();

        const newMessage = new MessageModel({
            name: name,
            email: email,
            subject: subject,
            content: content,
            createdAt: Date.now()
        })

        await newMessage.save()
    } catch (error) {
        console.error('Error sending Message', error)
        return Response.json(
            {
                success: false,
                message: "Error Sending Message"
            },
            {
                status: 500
            }
        )
    }
}