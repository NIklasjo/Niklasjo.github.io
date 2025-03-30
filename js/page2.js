               
                   document.addEventListener('DOMContentLoaded', function () {
                     // Uppdatera klockan varje sekund
                     function updateClock() {
                       const now = new Date();
                       document.getElementById('real-time-clock').textContent = now.toLocaleTimeString('sv-SE', {
                         hour: '2-digit', minute: '2-digit', second: '2-digit'
                       });
                     }
                     setInterval(updateClock, 1000);
                     updateClock();
               
                     // Stationkonfiguration: siteId, namn, tillåtna destinationer och linjefärg
                     const stations = [
                       { siteId: 9625, name: 'Ormsta', allowedDestinations: ["Stockholms östra"], shortColor: "#9F599A" },
                       { siteId: 9204, name: 'Tekniska högskolan', allowedDestinations: ["Fruängen", "Hässelby strand", "Vällingby"], shortColor: "#D71D24" },
                       { siteId: 9193, name: 'Gamla stan', allowedDestinations: ["Farsta strand", "Skarpnäck", "Hagsätra"], shortColor: "#148541" },
                       { siteId: 1550, name: 'Gullmarsplan', allowedDestinations: ["Sickla"], shortColor: "#ff7f00" }
                     ];
               
                     async function fetchDepartures() {
                       let allDepartures = [];
                       const now = new Date();
                       const lowerBound = new Date(now.getTime());
                       const futureTime = new Date(now.getTime() + 120 * 60000);  // 2 timmar framåt
               
                       // Hämta avgångar för varje station
                       for (const station of stations) {
                         try {
                           const response = await fetch(`https://transport.integration.sl.se/v1/sites/${station.siteId}/departures`);
                           if (!response.ok) throw new Error('Nätverksfel');
                           const data = await response.json();
                           if (data && data.departures) {
                             data.departures.forEach(dep => {
                               const departureTime = new Date(dep.expected);
                               if (departureTime >= lowerBound && departureTime <= futureTime &&
                                   station.allowedDestinations.includes(dep.destination)) {
                                 allDepartures.push({
                                   line: dep.line.designation,
                                   destination: dep.destination,
                                   departureTime: departureTime,
                                   formattedDeparture: departureTime.toLocaleTimeString('sv-SE', {
                                     hour: '2-digit', minute: '2-digit', second: '2-digit'
                                   }),
                                   stationId: station.siteId,
                                   stationShortColor: station.shortColor
                                 });
                               }
                             });
                           }
                         } catch (error) {
                           console.error('Fel vid hämtning:', error);
                         }
                       }
                       
                       // Töm tabellkroppen
                       const tbody = document.querySelector('#departuresTable tbody');
                       tbody.innerHTML = '';
               
                       // För varje station, visa rubrikrad och de 10 första avgångarna
                       stations.forEach(station => {
                         let stationDepartures = allDepartures.filter(dep => dep.stationId === station.siteId);
                         if (stationDepartures.length > 0) {
                           stationDepartures = stationDepartures.sort((a, b) => a.departureTime - b.departureTime).slice(0, 10);
                           const headerRow = document.createElement('tr');
                           headerRow.innerHTML = `<td colspan="4" class="station-header">${station.name}</td>`;
                           tbody.appendChild(headerRow);
                           
                           stationDepartures.forEach(dep => {
                             const row = document.createElement('tr');
                             let shortStyle = `background-color: ${dep.stationShortColor};`;
                             row.innerHTML = `
                               <td>
                                 <span class="line-number" style="${shortStyle}">${dep.line}</span>
                               </td>
                               <td>${dep.destination}</td>
                               <td>${dep.formattedDeparture}</td>
                               <td class="countdown-cell" data-departure="${dep.departureTime.getTime()}"></td>
                             `;
                             tbody.appendChild(row);
                           });
                         }
                       });
                     }
               
                     // Funktion som uppdaterar nedräkningen i varje cell
                     function updateCountdown() {
                       const cells = document.querySelectorAll('.countdown-cell');
                       const now = Date.now();
                       cells.forEach(cell => {
                         const departureMs = parseInt(cell.getAttribute('data-departure'), 10);
                         let diff = departureMs - now;
                         if (diff < 0) {
                           cell.textContent = "Avgått";
                         } else {
                           const minutes = Math.floor(diff / 60000);
                           const seconds = Math.floor((diff % 60000) / 1000);
                           cell.textContent = `${minutes} m ${seconds < 10 ? '0' : ''}${seconds} s`;
                         }
                       });
                     }
               
                     fetchDepartures();
                     setInterval(fetchDepartures, 15000); // Uppdatera var 15:e sekund
                     setInterval(updateCountdown, 1000);    // Uppdatera nedräkningen varje sekund
                   });
                 
               