async function Fetcher(...args: any) {
  try {
    const res = fetch(...args);
  } catch (error: any) {
    console.error("Erro: ", error);
  }
}

export default function useFetchSWR() {}
