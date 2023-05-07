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
        <div id="defns.iostream class templates">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.29" title="defns.iostream.templates" link="/intro.defs/iostream class templates" linkString="iostream class templates" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.29" title="defns.iostream.templates" link="/intro.defs/iostream class templates" linkString="iostream class templates" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsIostreamTemplates;