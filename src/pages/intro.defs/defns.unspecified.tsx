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
        <div id="defns.unspecified">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.66" title="unspecified behavior" link="/intro.defs/defns.unspecified" linkString="defns.unspecified" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.66" title="unspecified behavior" link="/intro.defs/defns.unspecified" linkString="defns.unspecified" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsUnspecified;