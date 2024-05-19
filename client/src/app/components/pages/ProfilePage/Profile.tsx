import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setuserGithubData } from '../../../Redux/Slices/LinkReducer';
import { FindByEmail} from '../../../Services/operations/ProfileHandler';
import { DecodedTokenHandler } from '../../../services/operations/generate&verifyOTP';
import { findProjectById } from '../../../Services/operations/ProjectHandler';
import { RootState } from '../store';
import { ProfileType, ProjectType } from '../types';
import Link from 'next/link';
import Image from 'next/image';
import { Feather, MaterialCommunityIcons, Foundation, FontAwesome5 } from 'react-icons/fa';
import tw from 'twin.macro';

const Profile = () => {
    const router = useRouter();
    const [profile, setProfile] = useState<ProfileType | null>(null);
    const [projects, setProjects] = useState<ProjectType[] | null>(null);
    const dispatch = useDispatch();
    const { userGithubData } = useSelector((state: RootState) => state.Links);

    useEffect(() => {
        findProfileByEmail();
    }, []);

    useEffect(() => {
        if (profile?.GithubLink) {
            navigateToGithubAcc(profile.GithubLink);
        }
        if (profile?.LinkedIn) {
            navigateToLinkedInAcc(profile.LinkedIn);
        }
    }, [profile]);

    const findProfileByEmail = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const res = await DecodedTokenHandler(token);
                const email = res.data.Email;
                const response = await FindByEmail(email);
                const id = response.data.response._id;
                const projects = await findProjectById(id);
                setProfile(response.data.response);
                setProjects(projects.data.project);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const navigateToGithubAcc = async (githubLink: string) => {
        const username = extractUsernameFromGithubLink(githubLink);
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.ok) {
                const userData = await response.json();
                dispatch(setuserGithubData(userData));
            } else {
                console.error('Failed to fetch GitHub user data');
            }
        } catch (error) {
            console.error('Error fetching GitHub user data:', error);
        }
    };

    const extractUsernameFromGithubLink = (githubLink: string): string => {
        const regex = /https:\/\/github.com\/([^\/]+)/;
        const match = githubLink.match(regex);
        if (match && match[1]) {
            return match[1];
        } else {
            throw new Error('Invalid GitHub link');
        }
    };

    const navigateToLinkedInAcc = async (LinkedInLink: string) => {
        try {
            await window.open(LinkedInLink, '_blank');
        } catch (error) {
            console.error('Error opening LinkedIn profile:', error);
        }
    };

    const handleAddProject = () => {
        router.push('/projects/new');
    };

    const navigateToEditProject = async (projectId: string) => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const decodedEmail = await DecodedTokenHandler(token);
                const email = decodedEmail.data.Email;
                const userProfile = await FindByEmail(email);
                delete userProfile.data.response.projectName;
                await DeleteProfile({ data: userProfile.data.response });
                router.push('/profile');
            }
        } catch (error) {
            console.error('Error deleting project:', error.message);
        }
    };

    const openProfileLink = () => {
        if (userGithubData && userGithubData.html_url) {
            window.open(userGithubData.html_url, '_blank');
        }
    };

    return (
        <div className="bg-gray-100">
            <div className="flex flex-row items-center pt-10 m-5">
                <button onClick={() => router.push('/home')}>
                    <Feather name="arrow-left" size={24} color="green" />
                </button>
                <h1 className="text-2xl ml-2" style={{ fontFamily: "MadimiOne" }}>Profile</h1>
            </div>
            <div className="container mx-auto">
                <div className="mt-3 m-3 w-11/12 bg-red-200 p-5 rounded-2xl flex flex-col shadow-xl">
                    <div className="flex flex-row gap-3">
                        <MaterialCommunityIcons name="alert-triangle" size={24} color="#ef4444" />
                        <p className="text-slate-700 max-w-[90%]" style={{ fontFamily: "MadimiOne" }}>Kindness knows no bounds. Respect every soul you encounter here. Our community thrives on mutual respect and understanding.</p>
                    </div>
                    <div className="flex flex-row gap-3 mt-3 items-center">
                        <MaterialCommunityIcons name="map-marker-radius-outline" size={24} color="#0d9488" />
                        <p className="text-slate-700 max-w-[90%]" style={{ fontFamily: "MadimiOne" }}>WorldWide</p>
                    </div>
                </div>

                {profile ? (
                    <div className="mx-auto">
                        <div className="flex ml-3 flex-row gap-4 pt-7 items-center">
                            <div className="flex justify-between items-center text-5xl border border-gray-400 rounded-full px-3 py-4 text-green-500" style={{ fontFamily: "MadimiOne" }}>
                                {profile.name.split(' ').map(name => name.charAt(0)).join('')}
                            </div>
                            <div className="pb-10">
                                <h2 className="text-3xl mr-2 pb-3 pt-4" style={{ fontFamily: "MadimiOne" }}>{profile.name}</h2>
                                <p className="text-base" style={{ fontFamily: 'MadimiOne' }}>{new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })} local time</p>
                            </div>
                        </div>
                        
                        <div className="w-11/12 bg-gray-200 p-4 flex flex-row shadow-md">
                            <div className="flex flex-row gap-3">
                                <Foundation name="book-bookmark" size={30} color="green" />
                                <p className="text-slate-700 max-w-[100%]" style={{ fontFamily: "MadimiOne" }}>Creating connections from pixels to databases, I'm here to weave together your dreams with code that's as friendly as it is powerful. Let's build bridges, not barriers!</p>
                            </div>
                        </div>

                        <div className="max-w-[90%] ml-5 m-4 pt-5">
                            <div className="flex flex-row justify-between items-center">
                                <h3 className="text-3xl mr-2 mb-6" style={{ fontFamily: "MadimiOne" }}>{profile.Professional_Role}</h3>
                                <button onClick={() => router.push('/edit-profile/professional-role')}>
                                    <Feather name="edit" size={25} color="green" className="text-red-400" />
                                </button>
                            </div>
                            <div className="w-11/12 flex flex-row justify-between items-center pb-4 mr-2">
                                <Foundation name="comment-quotes" size={30} color="black" />
                                <p className="text-lg mr-4" style={{ fontFamily: "BriemHand" }}>{profile.User_Bio}</p>
                                <button onClick={() => router.push('/edit-profile/bio')}>
                                    <Feather name="edit" size={25} color="green" className="text-red-400" />
                                </button>
                            </div>
                        </div>

                        <div className="pt-10 ml-5 mr-2 pb-14">
                            <div className="flex flex-row justify-between items-center pb-4">
                                <h3 className="text-3xl mr-2" style={{ fontFamily: "MadimiOne" }}>Skills</h3>
                                <button onClick={() => router.push('/edit-profile/skills')}>
                                    <Feather name="edit" size={25} color="green" className="text-red-400" />
                                </button>
                            </div>
                            <div className="flex flex-row gap-2">
                                {profile.Skills?.map((skill, index) => (
                                    <span key={index} className="bg-gray-200 p-2 text-lg rounded-md">{skill}</span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mt-2 pb-20 mx-5">
                            <div className="flex flex-row justify-between items-center pb-4">
                                <h3 className="text-3xl mr-2" style={{ fontFamily: "MadimiOne" }}>Social Links</h3>
                                <button onClick={() => router.push('/edit-profile/social-links')}>
                                    <Feather name="edit" size={25} color="green" className="text-red-400" />
                                </button>
                            </div>
                            <div className="flex flex-row gap-4 pt-4 items-center">
                                {profile.GithubLink && (
                                    <div className="bg-gray-100 p-2 border rounded-lg shadow-sm cursor-pointer" onClick={openProfileLink}>
                                        <div className="flex flex-row gap-3 items-center">
                                            <FontAwesome5 name="github" size={30} color="black" />
                                            <p className="text-xl max-w-[100%]" style={{ fontFamily: "MadimiOne" }}>GitHub</p>
                                        </div>
                                    </div>
                                )}
                                {profile.LinkedIn && (
                                    <div className="bg-gray-100 p-2 border rounded-lg shadow-sm cursor-pointer" onClick={() => window.open(profile.LinkedIn, '_blank')}>
                                        <div className="flex flex-row gap-3 items-center">
                                            <FontAwesome5 name="linkedin" size={30} color="black" />
                                            <p className="text-xl max-w-[100%]" style={{ fontFamily: "MadimiOne" }}>LinkedIn</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div className="mt-10">
                            <h3 className="text-3xl ml-5" style={{ fontFamily: "MadimiOne" }}>Projects</h3>
                            <button onClick={handleAddProject} className="ml-5 mt-2 bg-green-500 text-white p-2 rounded-md">Add New Project</button>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                {projects?.map((project) => (
                                    <div key={project._id} className="bg-white p-4 shadow-md rounded-md">
                                        <h4 className="text-2xl mb-2" style={{ fontFamily: "MadimiOne" }}>{project.projectName}</h4>
                                        <p className="text-base mb-4" style={{ fontFamily: "MadimiOne" }}>{project.projectDescription}</p>
                                        <button onClick={() => navigateToEditProject(project._id)} className="text-blue-500">Edit</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading profile...</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
