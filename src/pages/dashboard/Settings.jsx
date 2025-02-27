import { useState } from "react";
import camera from "../../assets/icons/camera.png"
import profilePic from "../../assets/JoshuaMeeks.png"
import editPassword from "../../assets/icons/edit.png"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"

const Settings = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    console.log(uploadedFile)
    return (
        <section className="max-w-[717px] bg-white shadow mx-auto p-5 rounded-lg mt-5 sm:mt-8 2xl:mt-12">
            <h3 className="text-headingTextColor font-semibold text-xl xs:text-2xl mb-3">User Profile</h3>
            <hr />
            <div className="mt-5">
                <div className="mb-5">
                    <p className="text-headingTextColor font-medium mb-2">Profile picture</p>
                    {/* User profile picture */}
                    <figure className="w-24 h-24 rounded-full relative">
                        <img src={profilePic} alt="profile" className="w-full h-full rounded-full object-cover" />

                        {/* Change Profile Picture */}
                        <label htmlFor="fileUpload" className="cursor-pointer">
                            <img src={camera} alt="camera" className="absolute right-0 bottom-0" />
                        </label>
                        <input id="fileUpload" type="file" className="hidden" onChange={(e) => setUploadedFile(e.target.files[0])} />
                    </figure>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 items-center mb-5">
                    {/* First name */}
                    <div className="">
                        <label htmlFor="firstName" className="font-medium block w-full mb-[6px]">First Name</label>
                        <input id="firstName" type="text" defaultValue='Mosharaf' className="border border-[#D0D5DD] bg-[#F9FAFB] text-primaryTextColor rounded px-2 py-2 block w-full" />
                    </div>
                    {/* Last name */}
                    <div className="">
                        <label htmlFor="lastName" className="font-medium block w-full mb-[6px]">Last Name</label>
                        <input id="lastName" type="text" defaultValue='Hossain' className="border border-[#D0D5DD] bg-[#F9FAFB] text-primaryTextColor rounded px-2 py-2 block w-full" />
                    </div>
                </div>
                {/* Email */}
                <div className="mb-5">
                    <label htmlFor="email" className="font-medium block w-full mb-[6px]">Email</label>
                    <input id="email" type="email" defaultValue='xyz@gmail.com' className="border border-[#D0D5DD] bg-[#F9FAFB] text-primaryTextColor rounded px-2 py-2 block w-full" />
                </div>

                {/* Reset Password */}
                <Dialog>
                    <div className="mb-8">
                        <label className="font-medium block w-full mb-[6px]">Password</label>
                        <DialogTrigger asChild>
                            <button className="rounded-[7px] font-medium px-3 py-2 inline-flex items-center gap-2 border border-[#D0D5DD] text-primaryTextColor">
                                <img src={editPassword} alt="edit" className="" />
                                <span>Change Password</span>
                            </button>
                        </DialogTrigger>
                    </div>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle className='text-2xl text-headingTextColor font-semibold'>Change Password</DialogTitle>
                        </DialogHeader>
                        <div className="">
                            <label htmlFor="oldPass" className="font-medium block w-full mb-[6px]">Enter Old Password</label>
                            <input id="oldPass" type="password" className="border border-[#D0D5DD] bg-[#F9FAFB] text-primaryTextColor rounded px-2 py-1 block w-full" />
                        </div>
                        <div className="-mt-1">
                            <label htmlFor="newPass" className="font-medium block w-full mb-[6px]">Enter New Password</label>
                            <input id="newPass" type="password" className="border border-[#D0D5DD] bg-[#F9FAFB] text-primaryTextColor rounded px-2 py-1 block w-full" />
                        </div>
                        <div className="-mt-1 mb-2">
                            <label htmlFor="confirmNewPass" className="font-medium block w-full mb-[6px]">Re-type Password</label>
                            <input id="confirmNewPass" type="password" className="border border-[#D0D5DD] bg-[#F9FAFB] text-primaryTextColor rounded px-2 py-1 block w-full" />
                        </div>
                        <DialogFooter>
                            <DialogClose className="block w-full">
                                <button className="block w-full rounded py-2 text-center bg-primaryBgColor text-white ">Update Password</button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                {/* Save btn */}
                <button type="submit" className="px-9 hover:bg-transparent duration-300 transition-all hover:text-primaryBgColor sm:px-16 py-2 sm:py-3 font-medium rounded-lg border bg-primaryBgColor text-white border-primaryBgColor">Save</button>
            </div>
        </section>
    );
};

export default Settings;