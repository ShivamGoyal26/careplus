import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";

const Registration = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container ">
        <div className="sub-container flex-1 flex-col max-w-[860px]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 CarePlus</p>
        </div>
      </section>

      <Image
        src={"/assets/images/register-img.png"}
        height={1000}
        width={1000}
        alt="logo"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Registration;
