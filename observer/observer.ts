/**
 * 주체(subject)가 변경되면 다른 객체들에게 알림.
 */
interface Observer {
    update(data: any): void;
}

/**
 * 주체
 */
interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    private state: number = 0; // 상태 값

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this.state);
        }
    }

    setState(state: number): void {
        this.state = state;
        this.notify();
    }

    getState(): number {
        return this.state;
    }
}

class ConcreteObserver implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    // 주체로부터 알림을 받으면 실행되는 메서드
    update(data: any): void {
        console.log(`received update ${data}`);
    }
}

const subject = new ConcreteSubject(); // 주체 생성

const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

subject.setState(10);
subject.detach(observer1);