export default function DynamicRoute({ id }) {
  return <p>Soy una ruta dinamica - {id}</p>;
}

export function getServerSideProps({ params }) {
  return {
    props: {
      id: params.id
    }
  };
}
