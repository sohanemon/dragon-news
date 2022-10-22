import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/user-provider";
const Register = () => {
  const { loginWithGoogle, loginWithFacebook, createUser } = useUserContext();

  const navigate = useNavigate();
  const handleRegister = () => {
    createUser();
  };

  return (
    <>
      <div className='m-auto container px-12 sm:px-0 mx-auto'>
        <div className='mx-auto h-full md:w-10/12 lg:w-6/12'>
          <div className='m-auto  py-12 sm:p-20 xl:w-10/12'>
            <div className='mt-12 rounded-3xl border bg-gray-50   -mx-6 sm:-mx-10 p-8 sm:p-10'>
              <div className='grid gap-6 sm:grid-cols-2'>
                <button
                  onClick={loginWithGoogle}
                  className='h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50  '
                >
                  <div className='flex items-center justify-center space-x-4'>
                    <FcGoogle />
                    <span className='block w-max text-sm font-semibold tracking-wide text-cyan-700 '>
                      Google
                    </span>
                  </div>
                </button>
                <button
                  onClick={loginWithFacebook}
                  className='h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50'
                >
                  <div className='flex items-center justify-center space-x-4 text-white'>
                    <BsFacebook className='text-cyan-800' />
                    <span className='block w-max text-sm font-semibold tracking-wide text-cyan-700 '>
                      Facebook
                    </span>
                  </div>
                </button>
              </div>
              <form className='mt-10 space-y-8 '>
                <div>
                  <div className='relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
                    <input
                      type='text'
                      placeholder='Name'
                      className='w-full bg-transparent pb-3  border-b border-gray-300  outline-none  invalid:border-red-400 transition'
                    />
                  </div>
                </div>
                <div className='flex flex-col items-end'>
                  <div className='w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
                    <input
                      type='email'
                      placeholder='Email'
                      className='w-full bg-transparent pb-3  border-b border-gray-300  outline-none  invalid:border-red-400 transition'
                    />
                  </div>
                </div>{" "}
                <div>
                  <div className='relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
                    <input
                      type='text'
                      placeholder='Photo URL'
                      className='w-full bg-transparent pb-3  border-b border-gray-300  outline-none  invalid:border-red-400 transition'
                    />
                  </div>
                </div>
                <div className='flex flex-col items-end'>
                  <div className='w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
                    <input
                      type='password'
                      placeholder='Password'
                      className='w-full bg-transparent pb-3  border-b border-gray-300  outline-none  invalid:border-red-400 transition'
                    />
                  </div>
                </div>
                <div>
                  <button className='w-full rounded-full bg-sky-500  h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800'>
                    <span className='text-base font-semibold text-white '>
                      Register
                    </span>
                  </button>
                  <button
                    onClick={() => navigate("/login")}
                    type='reset'
                    className='-ml-3 w-max p-3'
                  >
                    <span className='text-sm tracking-wide text-sky-600 '>
                      Have an account?
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;