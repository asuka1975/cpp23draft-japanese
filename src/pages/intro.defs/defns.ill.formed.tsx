import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsIllFormed: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.ill-formed program">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.25" title="defns.ill.formed" link="/intro.defs/ill-formed program" linkString="ill-formed program" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.25" title="defns.ill.formed" link="/intro.defs/ill-formed program" linkString="ill-formed program" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsIllFormed;