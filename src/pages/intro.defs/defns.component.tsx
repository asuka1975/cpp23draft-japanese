import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsComponent: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.component">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.12" title="defns.component" link="/intro.defs/component" linkString="component" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.12" title="defns.component" link="/intro.defs/component" linkString="component" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsComponent;