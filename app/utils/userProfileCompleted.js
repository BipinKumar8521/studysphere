import { currentUser } from "@clerk/nextjs/server";
import connectDB from "@/app/db/connectDB";
import Student from "@/app/db/schema/student";
import Teacher from "@/app/db/schema/teacher";

export default async function userProfileCompleted() {
  const user = await currentUser();
  connectDB();
  const isUser =
    (await Student.findOne({
      email: user.emailAddresses[0].emailAddress,
    })) ||
    (await Teacher.findOne({ email: user.emailAddresses[0].emailAddress }));
    return isUser;
}
