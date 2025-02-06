export default async function Page(
    { params }: { params: { username: string } }) {
        const post = params.username;
    return (
      <div>
        <h1 className="text-3xl font-thin">post of {post}</h1>
      </div>
    );
  }
  