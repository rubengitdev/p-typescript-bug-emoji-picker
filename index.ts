abstract class Bug<T> {
    // Define Property
    emoji!: T;
    emojiElement!: HTMLParagraphElement;

    // Define Constructor
    constructor(emojiElement: HTMLParagraphElement) {
        this.emojiElement = emojiElement;
    }

    abstract render(): void;
}

// Class for Bee
class Bee extends Bug<string> {
    constructor(emojiElement: HTMLParagraphElement) {
        super(emojiElement);
        this.emoji = "🐝";
    }

    override render() {
        this.emojiElement.innerText = this.emoji;
    }
}

// Class for Spider
class Spider extends Bug<string> {
    constructor(emojiElement: HTMLParagraphElement) {
        super(emojiElement);
        this.emoji = "🕷️";
    }

    override render() {
        this.emojiElement.innerText = this.emoji;
    }
}

// 🐘🦏🦒🦁🦓

// Clas for Lion
class Lion extends Bug<string> {
    constructor(emojiElement: HTMLParagraphElement) {
        super(emojiElement);
        this.emoji = "🦁";
    }

    override render() {
        this.emojiElement.innerText = this.emoji;
    }
}
// Clas for Elephant
class Elephant extends Bug<string> {
    constructor(emojiElement: HTMLParagraphElement) {
        super(emojiElement);
        this.emoji = "🐘";
    }

    override render() {
        this.emojiElement.innerText = this.emoji;
    }
}
// Clas for Rhino
class Rhino extends Bug<string> {
    constructor(emojiElement: HTMLParagraphElement) {
        super(emojiElement);
        this.emoji = "🦏";
    }

    override render() {
        this.emojiElement.innerText = this.emoji;
    }
}

function isSelect(element: EventTarget | null): element is HTMLSelectElement {
    return element instanceof HTMLSelectElement;
}

const bugEmojiElement =
    document.querySelector<HTMLParagraphElement>("#bug-emoji")!;

const bugMap: Record<string, Bug<string>> = {
    bee: new Bee(bugEmojiElement),
    spider: new Spider(bugEmojiElement),
    lion: new Lion(bugEmojiElement),
    elephant: new Elephant(bugEmojiElement),
    rhino: new Rhino(bugEmojiElement),
};

const selectElement = document.querySelector<HTMLSelectElement>("#species")!;

selectElement.addEventListener("change", (e) => {
    if (isSelect(e.target)) {
        bugMap[e.target.value].render();
    }
});
