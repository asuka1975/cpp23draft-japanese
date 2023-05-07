import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsTraits: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.traits">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.63" title="traits class" link="/intro.defs/defns.traits" linkString="defns.traits" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.63" title="traits class" link="/intro.defs/defns.traits" linkString="defns.traits" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsTraits;