import { Col, Divider, Row, Button } from 'antd';
import {
  GithubOutlined
    } from '@ant-design/icons';


const style = {
  background: '#80ffe8',
  padding: '8px 0 ',
};

const bg = {
  background: '#e1eff6'
}

const Project = () => (
  <>
  <div style={bg}>
    <Divider orientation="left"> </Divider>
    <Row gutter={[16, 16]}>
      <Col className="gutter-row" span={12}>
        <div style={style} className="container">
        <a href="https://nt399.github.io/weather-dashboard/"><img src='https://lh5.googleusercontent.com/OmIhpb71p-4F17hA8ILkCyq8pThWkj40zbD2mwD8BbILhe2dqVHOt1vE_8krhexORlY=w2400'/></a>
          <br></br>
          <b>Weather dashboard</b>
          &nbsp;
          <Button type="primary" href="https://github.com/NT399/weather-dashboard" icon={<GithubOutlined />}> 
          </Button>
        </div>
      </Col>

      <Col className="gutter-row" span={12}>
        <div style={style} className="container">
        <a href="https://nt399.github.io/stock-checker/"><img src='https://lh4.googleusercontent.com/8u-KPG1SYDoYztxvwko1bloAchxqi-jKjIjVXiiOWTf30347UdKCl9DP244idpyDJWI=w2400'/></a>
        <br></br>
          <b>Stock Price Checker</b>
          &nbsp;
          <Button type="primary" href="https://github.com/NT399/stock-checker" icon={<GithubOutlined />}> 
          </Button>
        </div>
      </Col>

      <Col className="gutter-row" span={12}>
        <div style={style} className="container">
        <a href="https://nt399.github.io/day-scheduler/"><img src='https://lh6.googleusercontent.com/xY0jviwndDsgGO4_xKdu0DlHNnN0F7hXXQ2MRSNMaThC8KtVSIl1qRQI-LUKmtWxhXY=w2400'/></a>
        <br></br>
          <b>Work Day Scheduler</b>
          &nbsp;
          <Button type="primary" href="https://github.com/NT399/day-scheduler" icon={<GithubOutlined />}> 
          </Button>
        </div>
      </Col>

      <Col className="gutter-row" span={12}>
        <div style={style} className="container">
        <a href="https://github.com/Samantha-Sokolis/cats-vs-dogs"><img src='https://lh4.googleusercontent.com/wGbtTMyldplgby8ATDkTX_1OvoDJ1IQErloVcEWO71X0LeYlxS823W6a2lqMi6OmGgc=w2400'/></a>
        <br></br>
          <b>Cats vs Dogs project</b>
          &nbsp;
          <Button type="primary" href="https://github.com/Samantha-Sokolis/cats-vs-dogs" icon={<GithubOutlined />}> 
          </Button>
        </div>
      </Col>

      <Col className="gutter-row" span={12}>
        <div style={style} className="container">
        <a href="https://catsvsdogs1.herokuapp.com/"><img src='https://lh6.googleusercontent.com/iXqmib3p4za0L0PW-4N-UND8ew7q-NA_8JmfpuDst3tk0y1VG0nGQS_I9isaiBPJfNs=w2400'/></a>
        <br></br>
          <b>Coding quiz game </b>
          &nbsp;
          <Button type="primary" href="https://github.com/NT399/Code-quiz" icon={<GithubOutlined />}> 
          </Button>
        </div>
      </Col>

      <Col className="gutter-row" span={12}>
        <div style={style} className="container">
        <a href="https://github.com/NT399/employee-tracker"><img src='https://lh6.googleusercontent.com/mAi2JQKjEmqT9nsN8wzRteywGQORTk1wzhH3Vy8M7l4tyL6nTxQMgqqWzjn2Kl8xhp4=w2400'/></a>
        <br></br>
         <b>Employee database</b>
         &nbsp;
          <Button type="primary" href="https://github.com/NT399/employee-tracker" icon={<GithubOutlined />}> 
          </Button>
        </div>
      </Col>


    </Row>
    </div>
    
    
  </>
);
export default Project;

