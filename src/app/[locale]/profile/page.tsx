import Layout from "@/components/Layout";
import db from "@/lib/db";
import { getSession } from "@/lib/session";
import { notFound } from "next/navigation";

async function getUserProfile() {
  const session = await getSession();

  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });

    return user;
  }

  notFound();
}

export default async function ProfilePage() {
  const loggedInUser = await getUserProfile();

  return (
    <Layout>
      <section id="profile">
        <span className="text-white">{loggedInUser?.username}</span>
      </section>
    </Layout>
  );
}
