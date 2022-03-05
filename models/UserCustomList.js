import { kMaxLength } from "buffer";
import mongoose from "mongoose";
import { userInfo } from "os";

const UserCustomListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide list name"],
      maxlength: 50,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

//psql variables for user_custom_list
// list_id SERIAL,
// list_name VARCHAR(50) NOT NULL,
// list_created_on TIMESTAMP NOT NULL,
// list_last_used TIMESTAMP,
// list_owner uuid NOT NULL,
// list_type VARCHAR(50),

export default mongoose.model("UserCustomList", UserCustomListSchema);
