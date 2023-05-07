import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsIostreamTemplates: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.iostream.templates">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.29" title="iostream class templates" link="/intro.defs/defns.iostream.templates" linkString="defns.iostream.templates" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.29" title="iostream class templates" link="/intro.defs/defns.iostream.templates" linkString="defns.iostream.templates" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsIostreamTemplates;