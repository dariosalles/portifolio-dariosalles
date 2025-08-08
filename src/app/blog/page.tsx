import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, 
  //blog, 
  person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    //title: blog.title,
    title: "Teste",
    //description: blog.description,
    description: "Teste",
    baseURL: baseURL,
    //image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    image: `/api/og/generate?title=${encodeURIComponent("Teste")}`,
    //path: blog.path,
    path: "/"
  });
}

export default function Blog() {
  return (
    <Column maxWidth="s">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        // title={blog.title}
        title="Teste"
        // description={blog.description}
        description="Teste"
        //path={blog.path}
        path="/"
        //image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        image=""
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {/* {blog.title} */}
      </Heading>
      <Column
				fillWidth flex={1}>
				<Posts range={[1,1]} thumbnail direction="column"/>
				<Posts range={[2,3]} thumbnail/>
				<Posts range={[4]} columns="2"/>
			</Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
