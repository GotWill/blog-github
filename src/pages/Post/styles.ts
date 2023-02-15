import styled from "styled-components";

export const Container = styled.div`
header img{
    width: 100%;
}
`

export const ContainerResumeCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .card{
        position: absolute;
        width: 864px;
        height: 168px;
        background: ${(props) => props.theme["base-profile"]};
        box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 40px;

        .header{
            display: flex;
            align-items: center;
            justify-content: space-between;

            a{
                font-weight: 700;
                font-size: 12px;
                color: ${(props) => props.theme.blue};
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: 3px;
            }
        }

        .content{
            margin-top: 16px;

            h2{
                font-weight: 700;
                color: ${(props) => props.theme["base-title"]}
 
            }

            .icons{
                display: flex;
               margin-top: 8px;
               gap: 10px;

               div{
                display: flex;
                align-items: center;
                gap: 5px;

                span{
                    font-weight: 400;
                    font-size: 16px;
                    color: ${(props) => props.theme["base-span"]}
                }
               }
            }
        }
    }
`

export const AreaDescription = styled.div`
   max-width: 800px;
   width: 100%;
   margin: 8rem auto 0;

   p{
    font-weight: 700;
    font-size: 16px;
    color: ${(props) => props.theme["base-text"]}
   }

   .link{
    margin-top: 20px;

    a{
        font-weight: 400;
        font-size: 16px;
        color: ${(props) => props.theme["blue"]}
    }

   }

   .box{
    margin: 20px 0;
    width: 800px;
    height: 110px;
    background: ${(props) => props.theme["base-post"]};
    border-radius: 2px;
    padding: 16px;

   }
`;