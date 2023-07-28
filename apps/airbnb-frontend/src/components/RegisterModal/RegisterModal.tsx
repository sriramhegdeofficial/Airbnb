"use client";

import React, {
  useState,
  useCallback,
  forwardRef,
  MutableRefObject,
} from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { toast } from "react-hot-toast";
import { useDebouncedValue } from "@mantine/hooks";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";

interface IProps {
  dialogRef: React.RefObject<HTMLDialogElement>;
}

const RegisterModal = forwardRef(function RegisterModal(
  { dialogRef }: IProps,
  ref
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {})
      .catch((error) => toast.error("something went wrong"))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <dialog
        ref={ref as MutableRefObject<HTMLDialogElement>}
        className="modal modal-bottom sm:modal-middle z-0"
      >
        <form
          method="dialog"
          className="modal-box z-[-100] md:max-w-[300px] py-4 z-[-100]"
        >
          <form className="w-full z-[-100]">
            <h3 className="font-black text-lg">Welocome to airbnb</h3>
            <p className="text-xs mb-2">Create account</p>
            <input
              type="text"
              placeholder="Name"
              className="input input-ghost focus:border-none w-full max-w-xs input-sm mt-2 rounded-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-ghost focus:border-none w-full max-w-xs input-sm my-5 rounded-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-ghost focus:border-none w-full max-w-xs input-sm mb-2 rounded-full"
            />
            <a
              className="rounded-full btn btn-wide btn-sm w-full hover:bg-rose-300 bg-rose-400 text-white font-bold text-xs tracking-wider mt-5"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </a>
            <div className="divider"></div>
            <div className="flex w-full max-w-full">
              <a className="btn btn-sm text-[10px] font-extrabold hover:bg-rose-400 transition-all hover:text-white flex-1 bg-base-300 rounded-box place-items-center te">
                <AiFillGoogleCircle size="16px" /> Google
              </a>

              <div className="btn btn-sm text-[10px] font-extrabold hover:bg-rose-400 transition-all hover:text-white  flex-1 bg-base-300 rounded-box place-items-center">
                <AiFillGithub size="16px" /> Github
              </div>
            </div>

            <p className="text-[10px] text-slate-500 text-center w-full mx-auto flex justify-center my-2">
              By clicking you agree to terms and conditions set forth by airbnb.
            </p>
          </form>

          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn absolute right-2 top-1.5">
              <GrClose />
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
});

export default RegisterModal;
