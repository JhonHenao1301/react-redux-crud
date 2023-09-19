
export default function Contact () {
 return (
    <div className="flex flex-col gap-4">
        <h1 className="text-center">Contact me</h1>
        <p className="text-center">
            Contact me or observe my work through the following social networks and repositories !!
        </p>
        <section className="flex gap-4 justify-center">
            <a href="https://www.linkedin.com/in/jhon-henao-abb272196/">
                <ion-icon name="logo-linkedin">
                </ion-icon>
            </a>
            <a href="https://github.com/JhonHenao1301?tab=repositories">
                <ion-icon name="logo-github">
                </ion-icon>
            </a>
        </section>
    </div>
 )
}