import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
    providers:[
        GithubProvider({
            clientId: 'Ov23li2k1agLicgvfRV7',
            clientSecret: 'b77d6134430ff25b801e702c5b450954c2074348'
        }),
    ],
};

export default NextAuth(authOptions);

