import { useParams } from "react-router-dom";
import { RouteParams } from "src/components/PokeDetails/PokeDetailsInterfaces.ts";
import PokeStats from "src/components/PokeDetails/PokeStats/PokeStats";
import usePokeDetails from "./usePokeDetails";
import "src/components/PokeDetails/PokeDetails.scss";

type Props = {};

function PokeDetails({}: Props) {
  const { name } = useParams() as RouteParams;
  const [pokemonDetail] = usePokeDetails(name);

  if (!pokemonDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view">
      <div className="poke-details-container">
        <h1>{name}</h1>
        <div className="poke-details-content">
          <img
            className="poke-image"
            src={pokemonDetail.sprites.other.dream_world.front_default}
            alt={name}
          />
          <PokeStats stats={pokemonDetail.stats} />
        </div>
        <footer className="poke-footer">POKEMON API</footer>
      </div>
    </div>
  );
}

export default PokeDetails;
