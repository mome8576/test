import Link from 'next/link';
import styled from 'styled-components';

const Card = styled.div`
.logo {
  margin-top: 50px;
  margin-left: 0px;
}
.church-text {
  font-size: 30px;
  margin-top: 50px;
  margin-left: 20px;
  color: white;
  text-align:center;
}  
.name-text {
  font-size: 50px;  
  letter-spacing: ??px;
  text-indent: ??px;
  color: white;
  text-align:center;
  margin-top:10px;
}

.ekk-image {
  position: absolute;
  bottom: 10px;
  left: 10px;
  }

  .card {
  position: relative;
    width: 300px;
    height: 600px;
    border-radius: 30px;
    background-color: hsl(215, 62%, 21%);
    overflow: hidden;
  }
`;

const A = styled.a``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  
  ${A} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const IndexPage = () => (
  <Wrapper>
    <Card >
<div className='card'>
   <img className='logo' src='/static/logo.svg' />
  <p className='church-text'>新生命小組教會</p>
  <p className='name-text'>吳孟禹</p>
  <img className='ekk-image' src='/static/ekk.svg' />
</div>
</Card>
  </Wrapper>
);

export default IndexPage;
