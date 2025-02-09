/**
 * 어떤 객체에 대한 접근을 제어하기 위해 대리 객체를 생성
 */

/**
 * 실제 객체
 */
class ResourceObject {
    constructor() {
        console.log("Resource object creating");
    }

    request() {
        console.log("Resource method call")
    }
}

class ResourceObjectProxy {
    private resourceObject: ResourceObject | null = null;

    request() {
        if (!this.resourceObject) {
            this.resourceObject = new ResourceObject();
        }

        this.resourceObject.request();
    }
}

const proxy = new ResourceObjectProxy();
proxy.request();
proxy.request()
