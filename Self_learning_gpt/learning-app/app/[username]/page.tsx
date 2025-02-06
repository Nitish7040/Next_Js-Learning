export default async function Page(
    { params }: { params: { username: string } }) {
        const name = params.username;
    return (
      <div>
        <h1 className="text-3xl font-thin">code with {name}</h1>
      </div>
    );
  }
  