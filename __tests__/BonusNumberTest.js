const LottoManager = require("../src/LottoManager");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("보너스 번호 입력 테스트", () => {
  test("숫자가 아닌 경우 예외가 발생한다. - 알파벳", () => {
    mockQuestions(["1,2,3,4,5,6", "a"]);

    expect(() => {
      const manager = new LottoManager();
      manager.inputWinningNumbers();
    }).toThrow("[ERROR]");
  });

  test("숫자가 아닌 경우 예외가 발생한다. - 특수문자", () => {
    mockQuestions(["1,2,3,4,5,6", "!"]);

    expect(() => {
      const manager = new LottoManager();
      manager.inputWinningNumbers();
    }).toThrow("[ERROR]");
  });

});
