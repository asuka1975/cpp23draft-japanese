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
        <div id="defns.defns.well.formed">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.68" title="well-formed program" link="/intro.defs/defns.well.formed" linkString="defns.well.formed" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.68" title="well-formed program" link="/intro.defs/defns.well.formed" linkString="defns.well.formed" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsWellFormed;