- 둘 다 node나 element의 텍스트값을 읽어올 수 있다.

- 둘다 텍스트노드를 추가
- 해당 엘리먼트의 텍스트 값을 반환



innerText : 'element'속성, element내에서 사용자에게 "보여지는" 텍스트 값을 읽어온다.

innerText는 공백을 제거하고 텍스트를 들고온다.

innerText는 사람이 읽을 수 있는 요소만 처리

innerText는 스타일을 고려한다, 숨겨진 요소의 텍스트는 반환하지 않는다.

innerText로 값을 읽는다면 리플로우가 발생 (최신 계산값을 반영한다.) 리플로우 계산은 비싼 기능이므로 피해야한다.

IE기준 innerText를 수정한다면 모든 자식 노드를 제거하고 자손 텍스트까지 영구파괴합니다. 
이로인해서 이후 다른 노드에 삽입도 불가합니다. - MDN참고

<br>
<br>


textContent : 'node'속성, 해당 노드가 가진 텍스트 값 그대로 읽는다.

textContent는 모든 텍스트를 그대로 들고온다.

script와 style요소를 포함한 모든 요소의 컨텐츠를 가져옵니다.

textContent는 노드의 모든 요소를 반환한다.