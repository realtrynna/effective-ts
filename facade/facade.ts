class SubOperationA {
    operation() {
        console.log("서브 작업 A");
    }
}

class SubOperationB {
    operation() {
        console.log("서브 작업 B");
    }
}

class Facade {
    private subOperationA: SubOperationA;
    private subOperationB: SubOperationB;

    constructor(subOperationA: SubOperationA = new SubOperationA(), subOperationB: SubOperationB = new SubOperationB()) {
        this.subOperationA = subOperationA;
        this.subOperationB = subOperationB;
    }

    operation() {
        this.subOperationA.operation();
        this.subOperationB.operation();
    }
}

/**
 * Facade 클래스가 SubOperation 클래스를 사용할 수 있는 인터페이스 제공.
 */
const facade = new Facade(
    new SubOperationA(),
    new SubOperationB()
)

facade.operation();