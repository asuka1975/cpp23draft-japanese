import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsWellFormed: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.well-formed program">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.68" title="defns.well.formed" link="/intro.defs/well-formed program" linkString="well-formed program" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.68" title="defns.well.formed" link="/intro.defs/well-formed program" linkString="well-formed program" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsWellFormed;