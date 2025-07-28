import classes from "./page.module.css";
import Image from "next/image";

export default function MealDetailsPage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>
        <div className={classes.headerText}>
          <h1>TITLE</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"EMAIL"}`}>NAME</a>
          </p>
          <p className={classes.summary}> SUMMARY</p>
        </div>
      </header>

      <main className={classes.main}>
        <p
          className={classes.instruction}
          dangerouslySetInnerHTML={{ __html: "..." }}
        ></p>
      </main>
    </>
  );
}
