import Kappale from "./Kappale";
import Otsikko from "./Otsikko";

const Section = () => {
    return (
        <>
            <Otsikko />
            <Kappale 
            teksti="Korkeasaaren tehtävä on uhanalaisten lajien ja luonnon monimuotoisuuden suojelu. Eläintarhassa tapahtuvan suojelutyön lisäksi osallistumme eri puolilla maailmaa tapahtuvaan suojeluun. Haluamme saada sinut mukaan suojelijaksi – muista, että pienilläkin teoilla voit vaikuttaa!"
            />
        </>
    );
}
 
export default Section;