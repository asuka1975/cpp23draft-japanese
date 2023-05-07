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
        <div id="defns.valid but unspecified state">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.67" title="defns.valid" link="/intro.defs/valid but unspecified state" linkString="valid but unspecified state" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.67" title="defns.valid" link="/intro.defs/valid but unspecified state" linkString="valid but unspecified state" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsValid;