"use client";
import { useState } from "react";
import MaxDiv from "@/components/MaxDiv";
import Image from "next/image";
import Logo from "../../public/svg/Logo";
import { imgOne } from "../../public/img";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { phoneNumbers } from "@/constant";
import { useToast } from "@/components/ui/use-toast";
import check from "../../public/svg/check.svg";

const formSchema = z.object({
  email: z.string(),
  username: z.string(),
  numberType: z.string(),
  phone: z.number(),
  password: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Page() {
  const [loginRegister, setLoginRegister] = useState<"Login" | "Register">(
    "Login"
  );

  const { toast } = useToast();

  const { register, handleSubmit, setValue, reset, watch } =
    useForm<FormValues>();

  const [validations, setValidations] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  const validatePassword = (password: string) => {
    setValidations({
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
    });
  };

  const submit = async (data: FormValues) => {
    try {
      if (
        !data.email ||
        !data.numberType ||
        !data.password ||
        !data.phone ||
        !data.username
      ) {
        toast({
          description: "Please Fill All The Inputs!",
          style: {
            borderRadius: "16px",
            backgroundColor: "#FF4D4D",
            color: "#ffffff",
          },
        });
      }
      const response = await fetch("/api/register", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        method: "POST",
      });

      if (response.ok) {
        toast({
          description: "Your Account Has Been Created Successfully!",
          style: {
            borderRadius: "16px",
            backgroundColor: "#3366FF",
            color: "#ffffff",
          },
        });
        reset();

        setLoginRegister("Login");
      }
    } catch (error) {
      console.log("Error Message:", error as string);
      toast({
        description: "An error occurred. Please try again.",
        style: {
          borderRadius: "16px",
          backgroundColor: "#FF4D4D",
          color: "#ffffff",
        },
      });
    }
  };

  const password = watch("password");

  return (
    <section className="bg-bg">
      <MaxDiv className="relative h-screen">
        <div className="flex flex-row justify-center xl:justify-start absolute top-0 right-0 left-0 py-12">
          <div className="xl:scale-100 scale-75">
            <Logo blackWhite="black" />
          </div>
        </div>

        <div className="flex xl:grid grid-cols-2 justify-center items-center h-full">
          <div className="hidden xl:flex flex-col items-center">
            <Image priority src={imgOne} alt="imgOne" />
            <div className="flex flex-col gap-2 w-[465px]">
              <h1 className="font-bold text-2xl">
                Elevate Your Messaging Efficiency with Our Innovative Admin
                Tools
              </h1>
              <h3 className="">
                Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih
                mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
                pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
                lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan
                kendali penuh pesan dengan manajemen konten yang praktis.
              </h3>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(submit)}
            className="w-[328px] xl:w-[466px] h-fit px-8 py-12 flex flex-col items-center justify-center justify-self-end gap-2 xl:gap-4 xl:bg-white rounded-xl xl:shadow-xl"
          >
            <div className="flex flex-col gap-1 w-[264px] justify-center items-center mx-auto mb-4">
              <h1 className="text-2xl font-bold">
                {loginRegister === "Login"
                  ? "Welcome Back"
                  : "Welcome to Fowardin"}
              </h1>
              <h3 className="text-sm text-center">
                {loginRegister === "Login"
                  ? "We’re so excited to see you again!"
                  : "Revolutionize your communication journey with Fowardin today"}
              </h3>
            </div>

            <Input
              {...register("email")}
              className="w-full h-[48px]"
              type={loginRegister === "Login" ? "text" : "email"}
              placeholder={
                loginRegister === "Login" ? "Username / Email" : "Email"
              }
            />

            {loginRegister === "Register" && (
              <div className="flex flex-col gap-4 w-full">
                <Input
                  {...register("username")}
                  className="w-full h-[48px] hidden xl:block"
                  type="text"
                  placeholder="Username"
                />

                <div className="flex flex-row gap-4 w-full ">
                  <Select
                    {...register("numberType")}
                    onValueChange={(value) => setValue("numberType", value)}
                  >
                    <SelectTrigger className="xl:block hidden w-[124px] h-[48px]">
                      <SelectValue
                        defaultValue={"(ID) +62"}
                        placeholder={"(ID) +62"}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {phoneNumbers.map((item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Input
                    {...register("phone")}
                    className="w-full h-[48px]"
                    type="text"
                    placeholder="Whatsapp Phone Number"
                  />
                </div>
              </div>
            )}

            <Input
              {...register("password")}
              className="w-full h-[48px]"
              type="password"
              placeholder="Password"
              onChange={(e) => validatePassword(e.target.value)}
            />

            <p className="text-blue text-sm w-full">Lupa Password?</p>

            <div
              className={`${
                loginRegister === "Login" ? "hidden" : "block"
              } p-4 w-full text-sm bg-[#F3F5F8] rounded-lg lg:hidden`}
            >
              <h1 className="text-gray-500">Password harus mengandung:</h1>
              <p
                className={`${
                  validations.length ? "text-green-500" : "text-gray-500"
                }`}
              >
                {validations.length && <Image src={check} alt="check" />}
                Paling tidak 8 karakter
              </p>
              <div className="text-gray-500">
                Paling tidak 3 dari syarat berikut:
              </div>
              <p
                className={`ml-4 flex gap-1 ${
                  validations.lowercase ? "text-green-500" : "text-gray-500"
                }`}
              >
                {validations.lowercase && <Image src={check} alt="check" />}
                Huruf kecil (a-z)
              </p>
              <p
                className={`ml-4 flex gap-1 ${
                  validations.uppercase ? "text-green-500" : "text-gray-500"
                }`}
              >
                {validations.uppercase && <Image src={check} alt="check" />}
                Huruf besar (A-Z)
              </p>
              <p
                className={`ml-4 flex gap-1 ${
                  validations.number ? "text-green-500" : "text-gray-500"
                }`}
              >
                {validations.number && <Image src={check} alt="check" />}
                Angka
              </p>
              <p
                className={`ml-4 flex gap-1 ${
                  validations.specialChar ? "text-green-500" : "text-gray-500"
                }`}
              >
                {validations.specialChar && <Image src={check} alt="check" />}
                Karakter Spesial (!@#$%^&*)
              </p>
            </div>

            <Button
              type="submit"
              className="bg-blue text-white w-full h-full py-4 mt-4"
            >
              {loginRegister === "Login" ? "Sign In" : "Sign Up"}
            </Button>

            {loginRegister === "Login" ? (
              <h1 className="mt-4 text-sm">
                Butuh buat akun?{" "}
                <button
                  onClick={() => setLoginRegister("Register")}
                  className="text-blue inline-block"
                >
                  Daftar di sini
                </button>
              </h1>
            ) : (
              <h1 className="mt-4 text-sm">
                Sudah punya akun?{" "}
                <button
                  onClick={() => setLoginRegister("Login")}
                  className="text-blue inline-block"
                >
                  Login di sini
                </button>
              </h1>
            )}
          </form>
        </div>
      </MaxDiv>
    </section>
  );
}
