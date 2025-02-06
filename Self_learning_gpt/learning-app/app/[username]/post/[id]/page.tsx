export default async function Page(
    { params }: { params: { id : number } }) {
        const id = params.id;
    return (
      <div>
        <h1 className="text-3xl font-thin">post of Nitish , post no: {id}</h1>
      </div>
    );
  }
  