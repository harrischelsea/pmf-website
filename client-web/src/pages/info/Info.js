import React, { Component } from 'react';

import '../../components/zaposlenici/Zaposlenici.css';
import { Container, Grid, List, Segment, Header, Message } from 'semantic-ui-react';

class Info extends Component {
    render() {
        return (
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
                <Container>
                    <Grid>
                        <Grid.Column mobile={16} tablet={8} computer={12}>
                            <Segment>
                                <h3>O FAKULTETU</h3>
                                <p>
                                    <p>
                                    Prirodno-matematički fakultet je najviša naučno-nastavna ustanova u oblasti temeljnih prirodnih i matematičkih nauka, čiji začeci sežu u 1950. godinu, kada su nastavno-naučni odsjeci prirodnih i matematičkih nauka bili u sastavu Filozofskog fakulteta. Od 1960. godine, odlukom Narodne Republike Bosne i Hercegovine (Službeni list broj 50/60) Prirodno-matematički fakultet je izdvojen iz okvira Filozofskog fakulteta i postao samostalna naučno-nastavna ustanova, koja objedinjava prirodne i matematičke nauke u čijem sastavu se nalaze naučno-nastavni odsjeci za: biologiju, fiziku, geografiju, hemiju i matematiku. Svaki nastavno-naučni odsjek predstavlja zaokruženu nastavnu i naučnu cjelinu, koja se sastoji iz nastavno-naučnih katedara i naučno-istraživačkih centara.
                                    </p>
                                    <p>
                                    Na Fakultetu je do sada diplomu visoke stručne spreme steklo 6205 kandidata, a diplomu prvog stepena 1074 studenata. Na Prirodno-matematičkom fakultetu magistriralo je 445 magistranata, a diplomu doktora bioloških, fizičkih, geografskih, hemijskih i matematičkih nauka stektlo je 384 doktoranata.
                                    </p>
                                    Na Fakultetu u toku 2008. godine u stalnom radnom odnosu uposleno je: 15 redovnih profesora, 15 vanrednih profesora, 24 docenta i 1 predavač. U stalnom radnom odnosu radi 14 viših asistenata od toga 3 da doktoratom nauka i 11 sa magisterijem prirodnih i matematičkih nauka. Na Fakultetu je uposlen 31 asistent i 2 stručna saradnika. U nastavno-naučnom procesu uključeno je 17 laboranata od koijh je 5 viših laboranata. Na Fakultetu je uposleno 54 radnika koji ne učestvuju u nastavno-naučnom i naučno-istraživačkom procesu.
                                    <p>
                                    Prirodno-matematički fakultet je neprekidno obavljao svoju nastavno-naučnu misiju i tokom minulih ratnih godina (1992-1995.), kada je na Fakultetu radilo 50 doktora i 13 magistara nauka. Imopozantan broj naučnog kadra iz oblasti prirodnih i matematičkih nauka na Prirodno-matematičkom fakultetu uspio je održati kontinuitet, ne samo svoga vlastitog rada, već biti i oslonoac rada većine visokokolskih institucija na Univerzitetu u Sarajevu.
                                    </p>
                                    Danas je Priordno-matematički fakultet respektabilna visokoškolska ustanova, ne samo na Univerzitetu u Sarajevu, već i u cijeloj Bosni i Hercegovini. Rezultati nastavno-naučnog kadra Fakulteta iz oblasti naučno-nastavnog i naučno-istraživačkog rada prepoznatljivi su i van granica države Bosne i Hercegovine. Prirodno-matematičke oblasti i nauke su matične brojnim visokoškolskim organizacijama na Univerzitetu u Sarajevu, kao i drugim fakultetima širom Bosne i Hercegovine. Nastavno-naučni kadar Prirodno-matematičkog fakulteta ugovorno je vezan za izvođenje nastavno-naučnog procesa i na fakultetima drugih univerzitete.
                                    <p>
                                    Prirodno-matematički fakultet vodi uspješnu saradnju i sa drugim fakultima na Univerzitetu u Sarajevu i univerzitetima širom Bosne i Hercegovine. Pored toga Fakultet vodi uspješnu saradnju i sa drugim univerzitetima izvan Bosne i Hercegovine.
                                    </p>
                                    Prirodno-matematički fakultet je duboko ušao u realizaciju Bolonjskog procesa. U akademskoj 2007/08. godini studenti završavaju III godinu (prvi ciklus) po Bolonjskim propisima. Postojeći nastavni plan i program sadržajno je izmijenjen u odnosu na prebolonjski nastavni plan i nastavni program. Na odsjecima su uvedeni novi smjerovi, koji su studij na Priordno-matematičkom fakultetu učinili veoma atraktivnim. Prema Bolonjskim kriterijumima na Prirodno-matematičkom fakultetu u ak. 2007/08. godini upisano je 1611 studenata od čega na: biologiji studira 464, fizici 149, geografiji 375, hemiji 352 i matematici 271 studenta.
                                    <p>
                                    Do sada je Fakultet realizirao veliki broj naučno-istraživačkih projekata, koji su objedinjavali brojne naučnike iz zemlje i inozemstva. Fakultet prednjači i u oblasti popularizacije nauke. U zgradama Prirodno-matematičkog fakulteta smještena su strukovna nevladina i nestranačka udruženja / društva, koja objedinjavaju i unapređuju nastavni proces školskih predmeta, koje baštini Prirodno-matematički fakultet.
                                    </p>
                                </p>
                            </Segment>
                            <Message info>
                                <Message.Header>Dodatne informacije: </Message.Header>
                                <p>lorem ipsum dolor.../</p>
                            </Message>
                        </Grid.Column>

                        <Grid.Column mobile={16} tablet={8} computer={4}>
                            <Segment className='segment-info'>
                                <Header className='info-title' size='small'>
                                    OSTALE INFORMACIJE
                                </Header>

                                <List className='info'>
                                    <List.Item>
                                        <List.Icon name='genderless' />
                                        <List.Content>Izbor u nastavnička zvanja</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='file' />
                                        <List.Content style={{color: "blue"}}>
                                            Formular za izbor u nastavnicka zvanja.doc
                                        </List.Content>
                                    </List.Item>
                                    <hr/>

                                    <List.Item>
                                        <List.Icon name='genderless' />
                                        <List.Content>Plan rada i razvoja</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='file' />
                                        <List.Content style={{color: "blue"}}>
                                            Plan rada i razvoja
                                        </List.Content>
                                    </List.Item>
                                    <hr/>

                                    <List.Item>
                                        <List.Icon name='genderless' />
                                        <List.Content>Dokumenti</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='file' />
                                        <List.Content style={{color: "blue"}}>
                                            doc 1
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Info;