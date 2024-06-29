import styles from "./newspaperThreeColumns.module.scss";
import  LastNews  from "../LastNews";
import  HankingNews  from "../HankingNews";
import  PreviewColumnist  from "../PreviewColumnist";

export default function NewspaperThreeColumns() {
    return (
        <>
            <div className="grid lg:grid-cols-3 mx-24 justify-center lg:gap-12  my-9">
                <LastNews/>
                <HankingNews/>
                <PreviewColumnist/>
            </div>
        </>
    )
}