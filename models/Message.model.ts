import { m } from "framer-motion";
import mongoose, {Schema, Document} from "mongoose";
import { Interface } from "readline";

export interface Message extends Document{
  name: string,
  email: string,
  subject: string,
  content: string,
  createdAt: Date,
}

const MessageSchema: Schema<Message> = new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now
    }
})

const MessageModel = (mongoose.models.Message as mongoose.Model<Message>) || mongoose.model<Message>("Message", MessageSchema)

export default MessageModel;