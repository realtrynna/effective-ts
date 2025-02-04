/**
 * 구 버전과 신 버전을 연결(adapter)
 */
class LegacyApi {
    fetchData(): string[] {
        return [
            "data",
            "data",
            "data",
        ]
    }
}

interface NewApi {
    getUserList(): string[];
}

class Adapter implements NewApi {
    private readonly legacyApi: LegacyApi;

    constructor(legacyApi: LegacyApi) {
        this.legacyApi = legacyApi
    }

    getUserList(): string[] {
        return this.legacyApi.fetchData();
    }
}

const client = new Adapter(new LegacyApi);
const userList = client.getUserList();

console.log(userList)