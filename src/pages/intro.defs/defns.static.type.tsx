import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsStaticType: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.static.type">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.61" title="static type" link="/intro.defs/defns.static.type" linkString="defns.static.type" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.61" title="static type" link="/intro.defs/defns.static.type" linkString="defns.static.type" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsStaticType;