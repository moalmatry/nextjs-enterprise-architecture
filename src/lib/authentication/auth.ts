import NextAuth, { User } from 'next-auth';
// import { createGuest, getGuest } from "@/app/_lib/data-service";
// import { login } from "@/services/login";
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';

export interface ExtendedUser extends User {
  id: string;
  userName: string;
  token: string;
  profileImage: string;
}

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut
} = NextAuth({
  providers: [
    Google,
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {
          label: 'Username:',
          type: 'text'
        },
        password: {
          label: 'Password:',
          type: 'password'
        }
      },
      authorize: async (
        credentials: Partial<Record<'username' | 'password', unknown>>
      ) => {
        // console.log("*********************");
        // console.log(credentials);
        // console.log("*********************");

        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password);
        // const userData = await login({
        //   user_email: String(credentials?.username),
        //   user_password: String(credentials?.password)
        // });

        // logic to verify if user exist
        // if (userData && userData.status === 1) {
        //   return {
        //     id: userData.user_data.user_id,
        //     name: userData.user_data.name,
        //     userName: userData.user_data.usernm,
        //     token: userData.user_data.user_token,
        //     profileImage: userData.user_data.has_pp
        //   } as ExtendedUser;
        // }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add user ID and token to the token object
      if (user) {
        const userWithToken = user as ExtendedUser;
        token.id = userWithToken.id;
        token.userName = userWithToken.userName;
        token.token = userWithToken.token;
        token.picture = userWithToken.profileImage;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user ID and token to the session object
      if (token) {
        // session.user.id = token.id as string;
        // session.user.userName = token.userName as string;
        // session.user.token = token.token as string;
        // session.user.image = token.picture as string;
      }
      return session;
    }
  },
  pages: {
    signIn: '/home'
  }
});
// providers: [
//   Google({
//     clientId: process.env.AUTH_GOOGLE_ID || "",
//     clientSecret: process.env.AUTH_GOOGLE_SECRET || ""
//   })
// ],
// callbacks: {
//   authorized: async ({ token }) => !!token
// },
// pages: {
//   signIn: "/home"
// }

// callback

// authorized({ auth, request }) {
//       return !!auth?.user;
//     },
//     async signIn({ user }) {
//       try {
//         const existingGuest = user.email && (await getUser(user.email));
//         if (!existingGuest)
//           // sd
//           console.log("new guest");

//         return true;
//       } catch {
//         return false;
//       }
//     },
//     async session({ session, user }: { session: any | Session; user: any }) {
//       const guest = await getUser(session?.user?.email || "");
//       session.user.guestId = guest?.id;

//       return session;
//     }
