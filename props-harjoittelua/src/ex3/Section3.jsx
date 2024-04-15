import Kappale from "../ex1/Kappale";
import Button from "./Button";
import Otsikko from "./Otsikko";


const Section3 = ({kasittelePainallus}) => {
    return (
        <>
            <Otsikko teksti="Kissa"/>
            <Kappale teksti="Kissa eli kesykissa tai kotikissa (Felis catus,[1][2] aiemmin Felis silvestris catus) on afrikanvillikissasta (Felis lybica) polveutuva ja petoeläinten (Carnivora) lahkon kissaeläinten (Felidae) heimoon kuuluva kesy nisäkäslaji. Kissat ovat suosittuja lemmikkieläimiä, ja etenkin maaseudulla ne ovat aina olleet hyödyllisiä hiirten ja muiden tuholaisten pyydystäjinä." />
            <Button
            teksti="Paina"
            kasittelePainallus={kasittelePainallus}
            />
        </>
    );
}
 
export default Section3;