export const Card = ({ pokemon }) => {
    if (pokemon.sprites && pokemon.sprites.front_shiny) {
        return (
            <div>
                <img src={pokemon.other.officialArtwork} alt="" />
            </div>
        );
    } else {
        return <div>sfiga</div>;
    }
};
