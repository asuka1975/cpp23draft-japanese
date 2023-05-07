import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsReplacement: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.replacement function">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.47" title="defns.replacement" link="/intro.defs/replacement function" linkString="replacement function" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.47" title="defns.replacement" link="/intro.defs/replacement function" linkString="replacement function" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsReplacement;