import {Editor} from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form'; 

function RTE({name,control,label,defaultValue="write your ideas!"})
{
 return (
<div className='w-full'>test
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
    <Controller
    name={name||"content"}
    control={control}
    render={({field:{onChange}})=>(
        
        <Editor
         apiKey="tzr8si4q4coad8msrf7u8d29koslb3c98j8ug9pzvdeged7o"
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )
    }
    />
</div>
 )
}

export default RTE;