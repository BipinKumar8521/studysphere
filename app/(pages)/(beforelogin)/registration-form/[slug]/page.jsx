import { redirect } from "next/navigation";
import Form from "../_components/Form";
import connectDB from "@/app/db/connectDB";
import Teacher from "@/app/db/schema/teacher";
import Student from "@/app/db/schema/student";
import { currentUser } from "@clerk/nextjs/server";
import { isRedirectError } from "next/dist/client/components/redirect";
import userProfileCompleted from "@/app/utils/userProfileCompleted";

const RegistrationForm = async ({ params }) => {
  const isUser = await userProfileCompleted();
  if (isUser) {
    //redirect to /dashboard
    console.log("redirected");
    return redirect("/dashboard");
  }

  const handleSubmitForm = async (formData) => {
    "use server";

    let data;
    const user = await currentUser();

    if (params.slug === "1") {
      data = {
        name: formData.get("name"),
        email: user.primaryEmailAddress.emailAddress,
        class: formData.get("class"),
        schoolOrCollegeName: formData.get("school/college name"),
        subjects: formData.get("subjects"),
        targetExam: formData.get("target exam"),
      };
    } else {
      data = {
        name: formData.get("name"),
        email: user.primaryEmailAddress.emailAddress,
        experienceLevel: formData.get("experience level"),
        highestQualification: formData.get("highest qualification"),
        teachingInterest: formData.get("teaching interest"),
      };
    }

    try {
      await connectDB();
      if (params.slug === "1") {
        const alreadyExist = await Student.findOne({ email: data.email });

        if (alreadyExist) {
          throw new Error("User already exist");
        }

        const student = await Student.create(data);
        console.log(student);
      } else {
        const alreadyExist = await Student.findOne({
          email: data.email,
        });

        if (alreadyExist) {
          throw new Error("Email already exist");
        }
        const teacher = await Teacher.create(data);
        console.log(teacher);
      }
      redirect("/");
    } catch (err) {
      if (isRedirectError(err)) {
        redirect("/dashboard");
      } else {
        console.error(err);
        redirect("/");
      }
    }
  };

  return <Form role={params.slug} handleSubmitForm={handleSubmitForm} />;
};

export default RegistrationForm;
