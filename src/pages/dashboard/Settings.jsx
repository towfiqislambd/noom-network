import { useState } from 'react';
import camera from '../../assets/icons/camera.png';
import profilePicImage from '../../assets/JoshuaMeeks.png';
import editPassword from '../../assets/icons/edit.png';
import { useForm } from 'react-hook-form';
import useAuth from '@/hooks/useAuth';
import { useUpdateUser } from '@/hooks/auth.hook';
import toast from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import Modal from '@/components/Modals/Modal';
import UpdatePasswordModal from '@/components/Modals/UpdatePasswordModal';

const Settings = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(
    user?.avatar
      ? `${import.meta.env.VITE_SITE_URL}/${user.avatar}`
      : profilePicImage
  );
  const [uploadedFile, setUploadedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  //   mutations:
  const { mutateAsync: updateUserMutation } = useUpdateUser(setLoading);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user?.name,
      email: user?.email,
    },
  });

  //   handlers:
  const onSubmit = async (data) => {
    const updatedData = {
      ...data,
      avatar: uploadedFile,
    };
    if (!uploadedFile) {
      toast.error('Please upload your profile picture');
    } else {
      console.log(updatedData);
      await updateUserMutation(updatedData);
    }
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);

      // Create a URL for the file to use as the image source
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);

      console.log('File uploaded:', file);
    }
  };
  return (
    <section className="max-w-[717px] bg-white shadow mx-auto p-5 rounded-lg mt-5 sm:mt-8 2xl:mt-12">
      <h3 className="text-headingTextColor font-semibold text-xl xs:text-2xl mb-3">
        User Profile
      </h3>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <div className="mb-5">
          <p className="text-headingTextColor font-medium mb-2">
            Profile picture
          </p>
          {/* User profile picture */}
          <figure className="w-24 h-24 rounded-full relative">
            <img
              src={profilePic}
              alt="profile"
              className="w-full h-full rounded-full object-cover"
            />

            {/* Change Profile Picture */}
            <label htmlFor="fileUpload" className="cursor-pointer">
              <img
                src={camera}
                alt="camera"
                className="absolute right-0 bottom-0"
              />
            </label>
            <input
              id="fileUpload"
              type="file"
              accept="image/*" // Restrict to image files only
              className="hidden"
              onChange={handleImage}
            />
          </figure>
        </div>
        <div className="  mb-5">
          {/* First name */}
          <div className="">
            <label htmlFor="name" className="font-medium block w-full mb-[6px]">
              Full Name
            </label>
            <input
              {...register('name', { required: true })}
              id="name"
              type="text"
              defaultValue="Mosharaf"
              className="border border-[#D0D5DD] bg-[#F9FAFB] text-primaryTextColor rounded px-2 py-2 block w-full"
            />
          </div>
        </div>
        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="font-medium block w-full mb-[6px]">
            Email
          </label>
          <input
            readOnly
            id="email"
            {...register('email', { required: true })}
            type="email"
            defaultValue="xyz@gmail.com"
            className="border border-[#D0D5DD] bg-[#F9FAFB] text-primaryTextColor rounded px-2 py-2 block w-full"
          />
        </div>

        {/* Reset Password */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-[7px] font-medium px-3 py-2 inline-flex items-center gap-2 border border-[#D0D5DD] text-primaryTextColor"
        >
          <img src={editPassword} alt="edit" className="" />
          <span>Change Password</span>
        </button>

        {/* Save btn */}
        <div className='mt-6'>
          <button
            type="submit"
            className={`px-9 group hover:bg-transparent duration-300 transition-all hover:text-primaryBgColor sm:px-16 py-2 sm:py-3 font-medium rounded-lg border bg-primaryBgColor text-white border-primaryBgColor h-12 ${
              loading ? 'opacity-80' : 'opacity-100'
            }`}
            disabled={loading} // Disable the button while loading
          >
            {loading ? (
              <ImSpinner9 className="animate-spin text-white text-lg group-hover:text-primaryBgColor" />
            ) : (
              'Save'
            )}
          </button>
        </div>
      </form>

      {/* modal */}
      <Modal open={open} setOpen={setOpen}>
        <UpdatePasswordModal setOpen={setOpen} />
      </Modal>
    </section>
  );
};

export default Settings;
