import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsUnspecified: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.unspecified behavior">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.66" title="defns.unspecified" link="/intro.defs/unspecified behavior" linkString="unspecified behavior" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.66" title="defns.unspecified" link="/intro.defs/unspecified behavior" linkString="unspecified behavior" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsUnspecified;