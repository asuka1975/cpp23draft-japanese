import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsValid: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.valid">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.67" title="valid but unspecified state" link="/intro.defs/defns.valid" linkString="defns.valid" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.67" title="valid but unspecified state" link="/intro.defs/defns.valid" linkString="defns.valid" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsValid;